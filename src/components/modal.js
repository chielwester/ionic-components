(() => ({
  name: 'Modal',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: ['CONTAINER_COMPONENT', 'CONTENT_COMPONENT', 'BODY_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonModal } = window.Ionic;

    const { env } = B;
    const { visible } = options;
    const isDev = env === 'dev';
    const isEmpty = children.length === 0;
    const isPristine = isEmpty && isDev;
    const [showModal, setShowModal] = useState(visible);

    useEffect(() => {
      B.defineFunction('Open', () => setShowModal(true));
      B.defineFunction('Close', () => setShowModal(false));
    }, []);

    const PlaceHolder = (
      <div
        className={[
          isEmpty ? classes.empty : '',
          isPristine ? classes.pristine : '',
        ].join(' ')}
      />
    );
    const Comp = (
      <IonModal isOpen={showModal} mode="ios">
        {isEmpty ? PlaceHolder : children}
      </IonModal>
    );

    return isDev ? (
      <div className={visible ? undefined : classes.hideInDevelopment}>
        {isEmpty ? PlaceHolder : children}
      </div>
    ) : (
      Comp
    );
  })(),
  styles: () => () => ({
    hideInDevelopment: {
      display: 'none',
    },
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
        content: '"Modal"',
      },
    },
  }),
}))();
