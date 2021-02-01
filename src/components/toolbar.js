(() => ({
  name: 'Toolbar',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT', 'CONTAINER_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonToolbar, IonTitle, IonMenuButton, IonButtons } = window.Ionic;
    const { env, useText } = B;
    const isDev = env === 'dev';
    const isEmpty = children.length === 0;
    const { title } = options;
    const titleText = useText(title);
    const TitleComponent = <IonTitle>{titleText}</IonTitle>;

    const Comp = (
      <IonToolbar mode="ios">{isEmpty ? TitleComponent : children}</IonToolbar>
    );

    return isDev ? <div className={classes.root}>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({
    root: {
      height: '100%',
    },
  }),
}))();
