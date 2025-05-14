import { TestBed } from '@angular/core/testing';
import { GoogleBookService } from './google-book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoogleBookService', () => {
  let service: GoogleBookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GoogleBookService],
    }).compileComponents();

    service = TestBed.inject(GoogleBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
