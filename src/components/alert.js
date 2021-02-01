(() => ({
  name: 'Alert',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonAlert } = window.Ionic;
    const { env, useText } = B;
    const isDev = env === 'dev';
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
      B.defineFunction('Open', () => setShowAlert(true));
      B.defineFunction('Close', () => setShowAlert(false));
    }, []);

    const Comp = (
      <IonAlert
        mode="ios"
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        header={'Delete this item'}
        subHeader={'Check again'}
        message={'This is an alert message.'}
        buttons={['Yes', 'No']}
      />
    );

    return isDev ? <div>Alert{Comp}</div> : Comp;
  })(),
  styles: () => () => ({}),
}))();
