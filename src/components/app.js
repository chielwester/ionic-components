(() => ({
  name: 'App',
  type: 'BODY_COMPONENT',
  allowedTypes: ['CONTAINER_COMPONENT', 'BODY_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonApp } = window.Ionic;

    const { env } = B;
    const isDev = env === 'dev';
    const isEmpty = children.length === 0;
    const isPristine = isEmpty && isDev;

    const PlaceHolder = (
      <div
        className={[
          isEmpty ? classes.empty : '',
          isPristine ? classes.pristine : '',
        ].join(' ')}
      />
    );
    // const Comp = <div>Hello</div>;
    const Comp = <IonApp mode="ios">{isEmpty ? PlaceHolder : children}</IonApp>;

    return isDev ? <div className={classes.root}>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({
    empty: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '4rem',
      height: '100%',
      width: '100%',
      fontSize: '0.75rem',
      color: '#262A3A',
      textTransform: 'uppercase',
      boxSizing: 'border-box',
    },
    pristine: {
      borderWidth: '0.0625rem',
      borderColor: '#AFB5C8',
      borderStyle: 'dashed',
      backgroundColor: '#F0F1F5',
      '&::after': {
        content: '"App"',
      },
    },
  }),
}))();
