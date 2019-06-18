import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../post';
import { POSTS } from '../../postData';
import { JobService } from '../../job.service';
import { Sort, MatCardTitle, MatSort } from '@angular/material';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {
public searchText: string;
  job: Post;
  profile: Post[];

  constructor(private service: JobService) {
    this.profile = POSTS.slice();
  }

  ngOnInit() {
    this.getJobs();
  }

  sortData(sort: Sort) {
    const data = POSTS.slice();
    if (!sort.active || sort.direction === '') {
      this.profile = data;
      return;
    }

    this.profile = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'domain': return this.compare(a.domain, b.domain, isAsc);
        case 'location': return this.compare(a.location, b.location, isAsc);
        default: return 0;
      }
    });
  }

  getJobs(): void {
    this.service.getJobs().subscribe(profile => this.profile = profile);
    console.log(this.profile);
  }
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}



