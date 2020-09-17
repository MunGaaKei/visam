const menu = [{
    name: '开始',
    href: 'javascript:;'
  }, {
    name: 'UI 组件',
    open: true,
    children: [{
      name: '按钮',
      href: '/button'
    }, {
      name: '多选框',
      href: '/checkbox',
      checked: true
    }, {
      name: '标签页',
      href: '/tab'
    }]
  }];

export {
    menu
}