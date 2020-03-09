import Vue from 'vue'
import { Upload, Checkbox, CheckboxGroup, Steps, Step, Tabs, TabPane, Alert, Cascader, Option, Select, Tree, Tag, MessageBox, Dialog, Pagination, Tooltip, Switch, Table, TableColumn, Col, Row, Card, Breadcrumb, BreadcrumbItem, Button, Form, FormItem, Input, Message, Container, Header, Main, Aside, Footer, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

Vue.use(Button).use(Card).use(Col).use(Row).use(Table).use(TableColumn).use(Switch).use(Tooltip).use(Dialog);
Vue.use(Form).use(FormItem).use(Input).use(Container).use(Header).use(Aside).use(Footer).use(Main).use(Tag);
Vue.use(Menu).use(MenuItem).use(MenuItemGroup).use(Submenu).use(Breadcrumb).use(BreadcrumbItem).use(Pagination);
Vue.use(Tree).use(Select).use(Option).use(Cascader).use(Alert).use(Tabs).use(TabPane).use(Steps).use(Step);
Vue.use(Checkbox).use(CheckboxGroup).use(Upload)
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
