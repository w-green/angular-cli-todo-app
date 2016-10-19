import { TodoAppAngular2Page } from './app.po';

describe('todo-app-angular-2 App', function() {
  let page: TodoAppAngular2Page;

  beforeEach(() => {
    page = new TodoAppAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
