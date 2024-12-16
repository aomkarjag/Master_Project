import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Observable } from 'rxjs';
import { ActiveFieldsService } from '../../services/active-fields.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-most-active-business',
  imports: [FormsModule],
  templateUrl: './most-active-business.component.html',
  styleUrl: './most-active-business.component.css'
})
export class MostActiveBusinessComponent implements OnInit {
  peopleData: { Company: string; count: number }[] = [];
  maxValues: number = 10; // Default number of values to display
  constructor(private http: HttpClient, private activeFieldsService:ActiveFieldsService) {}

  ngOnInit(): void {
      this.getActiveBusinessData();
  }

  getActiveBusinessData(){
    this.activeFieldsService.getActiveBusiness(this.maxValues).subscribe(
      (response)=>{
        console.log(response)
        this.peopleData=response.data
        this.createGraph(response.data);
      },

      (error) => {
        console.error('API Error:', error);
      }

    )
  }

  createGraph(companyValues:{ Company: string; count: number }[]): void {
    // Clear any existing SVG
    d3.select('#barChart').select('svg').remove();

    // Filter data based on maxValues
    const data = companyValues.slice(0, this.maxValues);

    // Dimensions
    const margin = { top: 20, right: 30, bottom: 100, left: 50 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select('#barChart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X Scale
    const x = d3
      .scaleBand()
      .domain(data.map(d => d.Company))
      .range([0, width])
      .padding(0.2);

    // Y Scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.count)!])
      .range([height, 0]);

    // Add X axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    // Add Y axis
    svg.append('g').call(d3.axisLeft(y));

    // Add Bars
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.Company)!)
      .attr('y', d => y(d.count))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.count))
      .attr('fill', 'steelblue');

    // Add Labels
    svg
      .selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('x', d => x(d.Company)! + x.bandwidth() / 2)
      .attr('y', d => y(d.count) - 5)
      .attr('text-anchor', 'middle')
      .text(d => d.count);
  }
}
