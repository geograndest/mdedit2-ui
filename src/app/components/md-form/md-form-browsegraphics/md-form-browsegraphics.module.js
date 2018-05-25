import { mdFormBrowsegraphicsComponent } from './md-form-browsegraphics.component';
import { mdFormBrowsegraphicComponent } from './md-form-browsegraphic/md-form-browsegraphic.component';

export const mdFormBrowsegraphics = angular
    .module('components.mdFormBrowsegraphics', [])
    .component('mdFormBrowsegraphics', mdFormBrowsegraphicsComponent)
    .component('mdFormBrowsegraphic', mdFormBrowsegraphicComponent)
    .name;