(() => ({
  name: 'BackButton',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonBackButton, IonButton } = window.Ionic;
    const { title } = options;
    const { env } = B;
    const isDev = env === 'dev';

    const Comp = <IonBackButton>{title}</IonBackButton>;
    const devComp = <IonButton>{title}</IonButton>;

    return isDev ? <div>{devComp}</div> : Comp;
  })(),
  styles: () => () => ({}),
}))();
