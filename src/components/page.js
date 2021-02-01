(() => ({
  name: 'Page',
  type: 'BODY_COMPONENT',
  allowedTypes: ['CONTAINER_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonPage } = window.Ionic;

    const { env } = B;
    const { id, visible, zIndex } = options;
    const isDev = env === 'dev';
    const isEmpty = children.length === 0;
    const isPristine = isEmpty && isDev;
    const isVisible = visible ? undefined : { display: 'none' };

    const PlaceHolder = (
      <div
        className={[
          isEmpty ? classes.empty : '',
          isPristine ? classes.pristine : '',
        ].join(' ')}
      />
    );
    const Comp = (
      <IonPage style={{ zIndex: `${zIndex}` }} id={id} contentId="main-content">
        {isEmpty ? PlaceHolder : children}
      </IonPage>
    );

    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({
    root: { height: '100%' },
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
        content: '"Page"',
      },
    },
  }),
}))();
