(() => ({
  name: 'Searchbar',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonSearchbar } = window.Ionic;
    const { env, useText } = B;
    const isDev = env === 'dev';
    const { value } = options;
    const valueText = useText(value);

    const Comp = <IonSearchbar value={valueText} />;

    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({}),
}))();
