interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly W6S_BASE_API: string;
  readonly W6S_PROJECT_NAME: string;
  readonly W6S_PROJECT_COPY_RIGHT: string;

  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly hot: any;
}
