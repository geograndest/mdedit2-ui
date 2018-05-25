import template from './change-view.html';

const changeViewController = class ChangeViewController {
    constructor() {}

    $onInit() {
        for (var i = 0; i < Object.keys(this.views).length; i++) {
            if (Object.keys(this.views)[i] == this.view) {
                this.viewIndex = i;
                break;
            }
        }
    }

    _getNextIndex(index, max) {
        index++;
        if (index >= max) {
            return 0;
        }
        return index;
    }

    _getView(index, views) {
        return Object.keys(views)[index];
    }

    getNextView() {
        this.viewIndex = this._getNextIndex(this.viewIndex, Object.keys(this.views).length);
        this.view = this._getView(this.viewIndex, this.views);
        this.onChange({
            view: this.view
        });
    }

    getView(view) {
        this.view = view;
        this.onChange({
            view: this.view
        });
    }
}

export const changeViewComponent = {
    bindings: {
        format: '@',
        icon: '@',
        lang: '@',
        view: '<',
        views: '<',
        onChange: '&'
    },
    template: template,
    controller: changeViewController,
};