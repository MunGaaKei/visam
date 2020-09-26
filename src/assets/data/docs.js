const menu = [{
    name: '开始',
    href: 'javascript:;'
  }, {
    name: 'UI 组件',
    open: true,
    children: [{
      name: '按钮',
      href: '/button',
    }, {
      name: '多选框',
      href: '/checkbox',
      checked: true
    }, {
      name: '表单',
      href: '/form',
    }, {
      name: '组合',
      href: '/group',
    }, {
      name: '下拉框',
      href: '/select',
    }, {
      name: '标签页',
      href: '/tab'
    }, {
      name: '表格',
      href: '/table'
    }]
  }];

export {
    menu
}