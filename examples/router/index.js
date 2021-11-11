import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Docs from "@/pages/Docs";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/docs",
    name: "Docs",
    component: Docs,
    children: [
      {
        path: "button",
        name: "Button",
        components: {
          default: Docs,
          child: () => import("@/pages/Button"),
        },
      },
      {
        path: "dialog",
        name: "Dialog",
        components: {
          default: Docs,
          child: () => import("@/pages/Dialog"),
        },
      },
      {
        path: "drawer",
        name: "Drawer",
        components: {
          default: Docs,
          child: () => import("@/pages/Drawer"),
        },
      },
      {
        path: "form",
        name: "Form",
        components: {
          default: Docs,
          child: () => import("@/pages/Form"),
        },
      },
      {
        path: "input",
        name: "Input",
        components: {
          default: Docs,
          child: () => import("@/pages/Input"),
        },
      },
      {
        path: "notice",
        name: "Notice",
        components: {
          default: Docs,
          child: () => import("@/pages/Notice"),
        },
      },
      {
        path: "select",
        name: "Select",
        components: {
          default: Docs,
          child: () => import("@/pages/Select"),
        },
      },
      {
        path: "start",
        name: "Start",
        components: {
          default: Docs,
          child: () => import("@/pages/Start"),
        },
      },
      {
        path: "tab",
        name: "Tab",
        components: {
          default: Docs,
          child: () => import("@/pages/Tab"),
        },
      },
      {
        path: "progress",
        name: "Progress",
        components: {
          default: Docs,
          child: () => import("@/pages/Progress"),
        },
      },
      {
        path: "table",
        name: "Table",
        components: {
          default: Docs,
          child: () => import("@/pages/Table"),
        },
      },
      {
        path: "step",
        name: "Step",
        components: {
          default: Docs,
          child: () => import("@/pages/Step"),
        },
      },
      {
        path: "checkbox",
        name: "Checkbox",
        components: {
          default: Docs,
          child: () => import("@/pages/Checkbox"),
        },
      },
      {
        path: "radio",
        name: "Radio",
        components: {
          default: Docs,
          child: () => import("@/pages/Radio"),
        },
      },
      {
        path: "slide",
        name: "Slide",
        components: {
          default: Docs,
          child: () => import("@/pages/Slide"),
        },
      },
      {
        path: "icon",
        name: "Icon",
        components: {
          default: Docs,
          child: () => import("@/pages/Icon"),
        },
      },
      {
        path: "swiper",
        name: "Swiper",
        components: {
          default: Docs,
          child: () => import("@/pages/Swiper"),
        },
      },
      {
        path: "tooltip",
        name: "Tooltip",
        components: {
          default: Docs,
          child: () => import("@/pages/Tooltip"),
        },
      },
      {
        path: "tree",
        name: "Tree",
        components: {
          default: Docs,
          child: () => import("@/pages/Tree"),
        },
      },
      {
        path: "page",
        name: "Page",
        components: {
          default: Docs,
          child: () => import("@/pages/Page"),
        },
      },
      {
        path: "dropdown",
        name: "Dropdown",
        components: {
          default: Docs,
          child: () => import("@/pages/Dropdown"),
        },
      },
      {
        path: "calendar",
        name: "Calendar",
        components: {
          default: Docs,
          child: () => import("@/pages/Calendar"),
        },
      },
      {
        path: "lazy",
        name: "Lazy",
        components: {
          default: Docs,
          child: () => import("@/pages/Lazy"),
        },
      },
      {
        path: "lazyload",
        name: "Lazyload",
        components: {
          default: Docs,
          child: () => import("@/pages/Lazyload"),
        },
      },
      {
        path: "drag",
        name: "Drag",
        components: {
          default: Docs,
          child: () => import("@/pages/Drag"),
        },
      },
      {
        path: "collapse",
        name: "Collapse",
        components: {
          default: Docs,
          child: () => import("@/pages/Collapse"),
        },
      },
      {
        path: "card",
        name: "Card",
        components: {
          default: Docs,
          child: () => import("@/pages/Card"),
        },
      },
      {
        path: "cols",
        name: "Cols",
        components: {
          default: Docs,
          child: () => import("@/pages/Cols"),
        },
      },
      {
        path: "group",
        name: "Group",
        components: {
          default: Docs,
          child: () => import("@/pages/Group"),
        },
      },
      {
        path: "intro",
        name: "Intro",
        components: {
          default: Docs,
          child: () => import("@/pages/Intro"),
        },
      },
      {
        path: "viewer",
        name: "Viewer",
        components: {
          default: Docs,
          child: () => import("@/pages/Viewer"),
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
