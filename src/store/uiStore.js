import { observable, action } from "mobx";

class UiStore {
    @observable sideMenu = {
        show: false,
    }

    @action.bound
    toggleSideMenu() {
        this.sideMenu.show = this.sideMenu.show ? false : true;
    }
}

export default new UiStore();