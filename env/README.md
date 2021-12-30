# 关于 .env

- 添加的环境字段，默认通过`W6S_`作为前缀，这在`vite.config.ts`中已经配置好，**请勿随意修改**；

- 为了更好地配合 TypeScript 智能提醒，你所添加字段，请在`env.d.ts`中进行定义描述；

- 符合`W6S_`开头以及 Vite 默认可导出的字段，都会通过`@vitue/export-env-json`工具在打包完成后输出到`{dest|outdir}`目录；