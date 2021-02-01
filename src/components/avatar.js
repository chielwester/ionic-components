(() => ({
  name: 'Avatar',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonAvatar } = window.Ionic;
    const { env } = B;
    const isDev = env === 'dev';
    const { position } = options;

    const varPosition = position === 'none' ? undefined : position;

    const Comp = (
      <IonAvatar slot={varPosition}>
        <img
          src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
          alt=""
        />
      </IonAvatar>
    );
    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
