(() => ({
  name: 'ToolbarTitle',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonTitle } = window.Ionic;
    const { env, useText } = B;
    const isDev = env === 'dev';

    const { title } = options;
    const titleText = useText(title);

    const Comp = <IonTitle>{titleText}</IonTitle>;

    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({}),
}))();
