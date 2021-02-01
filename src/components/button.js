(() => ({
  name: 'Button',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonButton } = window.Ionic;
    const { env, useText, useEndpoint } = B;
    const { buttonText, variant, linkTo } = options;
    const href = linkTo ? useEndpoint(linkTo) : undefined;

    const isDev = env === 'dev';
    const buttonContent = useText(buttonText);

    const handleClick = () => {
      B.triggerEvent('onClick');
    };

    const Comp = (
      <IonButton fill={variant} onClick={handleClick} href={href}>
        {buttonContent}
      </IonButton>
    );

    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({}),
}))();
