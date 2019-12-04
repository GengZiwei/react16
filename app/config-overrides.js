const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');
module.exports = override(
  fixBabelImports('import', { // 按需加载antd
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({ // 修改全局配置 可以进行less 在全局引入  详情见https://ant.design/docs/react/customize-theme-cn
    javascriptEnabled: true,
    modifyVars: {},
  }),
  addWebpackAlias({ // 修改webpack的alias
    "@": path.resolve(__dirname, "src"),
    "components": path.resolve(__dirname, "src/components"),
    "pages": path.resolve(__dirname, "src/pages"),
    "api": path.resolve(__dirname, "API"),
  })
)

/* 
@primary-color: #1890ff; // 全局主色
@link-color: #1890ff; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.85); // 标题色
@text-color: rgba(0, 0, 0, 0.65); // 主文本色
@text-color-secondary : rgba(0, 0, 0, .45); // 次文本色
@disabled-color : rgba(0, 0, 0, .25); // 失效色
@border-radius-base: 4px; // 组件/浮层圆角
@border-color-base: #d9d9d9; // 边框色
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
*/