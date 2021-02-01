(() => ({
  name: 'Label',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonLabel } = window.Ionic;
    const { env, useText } = B;
    const isDev = env === 'dev';
    const { labelText } = options;

    const parsedLabelText = useText(labelText);

    const Comp = <IonLabel>{parsedLabelText}</IonLabel>;

    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({}),
}))();
