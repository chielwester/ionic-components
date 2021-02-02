(() => ({
  name: 'Menu',
  type: 'BODY_COMPONENT',
  allowedTypes: ['CONTAINER_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      IonMenu,
      IonButton,
      IonContent,
      IonToolbar,
      IonHeader,
      IonTitle,
    } = window.Ionic;
    const { env } = B;
    const isDev = env === 'dev';

    const { menuPosition } = options;

    const [, setToggleMenu] = useState(false);

    useEffect(() => {
      B.defineFunction('Open', () => setToggleMenu(true));
      B.defineFunction('Close', () => setToggleMenu(false));
    }, []);

    const Comp = (
      <IonMenu side={menuPosition} contentId="main-content" menuId="first">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent id="main-content">
          <IonButton>Dashboard</IonButton>
          {children}
        </IonContent>
      </IonMenu>
    );
    return isDev ? <div>{Comp}</div> : Comp;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
