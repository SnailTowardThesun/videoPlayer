import { VideoPlayerPage } from './app.po';

describe('video-player App', () => {
  let page: VideoPlayerPage;

  beforeEach(() => {
    page = new VideoPlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
