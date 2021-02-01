(() => ({
  name: 'MenuButton',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonMenuButton } = window.Ionic;
    const { menu } = options;
    const { env } = B;
    const isDev = env === 'dev';

    const Comp = <IonMenuButton menu={menu} />;

    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({}),
}))();
