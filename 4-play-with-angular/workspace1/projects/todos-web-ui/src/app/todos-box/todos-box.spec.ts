import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosBox } from './todos-box';

describe('TodosBox', () => {
  let component: TodosBox;
  let fixture: ComponentFixture<TodosBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
