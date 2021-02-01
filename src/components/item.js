(() => ({
  name: 'Item',
  type: 'CONTENT_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      IonItem,
      IonLabel,
      IonItemSliding,
      IonItemOptions,
      IonItemOption,
    } = window.Ionic;
    const { env, useText, useEndpoint } = B;
    const isDev = env === 'dev';
    const { text, linkTo } = options;
    const isEmpty = children.length === 0;
    const itemText = useText(text);
    const href = linkTo ? useEndpoint(linkTo) : undefined;

    const [myOptions, updateMyOption] = useOptions(options);

    const handleClick = () => {
      updateMyOption({
        ...myOptions,
        selectedItem: 'Martijn',
      });
      B.triggerEvent('onClick');
    };

    const LabelComponent = <IonLabel>{itemText}</IonLabel>;

    const handleSwipe = event => {
      console.log('henk');
    };

    const handleOptionClick = event => {
      B.triggerEvent('onOptionClick');
      console.log('click');
    };

    const Comp = (
      <IonItemSliding>
        <IonItem onClick={handleClick} detail="true" href={href}>
          {isEmpty ? LabelComponent : children}
        </IonItem>

        <IonItemOptions side="end" ionSwipe={handleSwipe}>
          <IonItemOption color="danger" expandable onClick={handleOptionClick}>
            Delete
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    );
    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
