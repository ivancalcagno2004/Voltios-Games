import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { register as registerSwiperElements} from 'swiper/element/bundle';
// register Swiper custom elements
registerSwiperElements();
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
