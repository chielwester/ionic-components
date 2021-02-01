(() => ({
  name: 'ListHeader',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonListHeader } = window.Ionic;
    const { env, useText } = B;
    const isDev = env === 'dev';
    const { headerText } = options;

    const parsedHeaderText = useText(headerText);

    const Comp = <IonListHeader>{parsedHeaderText}</IonListHeader>;

    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({}),
}))();
