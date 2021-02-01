(() => ({
  name: 'Nav',
  type: 'BODY_COMPONENT',
  allowedTypes: ['CONTAINER_COMPONENT', 'BODY_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { IonNav } = window.Ionic;

    const { env } = B;
    const isDev = env === 'dev';
    const isEmpty = children.length === 0;
    const isPristine = isEmpty && isDev;

    const nav = useRef(null);

    const handlePop = () => {
      nav.current.push('bb-page-1');
    };

    const handlePush = () => {
      nav.current.push('bb-page-0');
    };

    const mounted = useRef(false);

    useEffect(() => {
      B.defineFunction('Push', () => handlePush());
      B.defineFunction('Pop', () => handlePop());

      if (!mounted.current && !isDev) {
        nav.current.setRoot('bb-page-0');

        React.Children.map(children, (child, index) => {
          const { id } = child.props.options;
          console.log(id);
          const el = document.querySelector(`#${id}`);
          const name = `bb-page-${index}`;

          if (!customElements.get(name)) {
            const nodes = [];
            el.childNodes.forEach(node => {
              nodes.push(node);
            });

            customElements.define(
              name,
              class Page0 extends HTMLElement {
                connectedCallback() {
                  this.append(...nodes);
                }
              },
            );
          }
          el.parentNode.removeChild(el);
        });
      }
      mounted.current = true;
    }, [children]);

    const PlaceHolder = (
      <div
        className={[
          isEmpty ? classes.empty : '',
          isPristine ? classes.pristine : '',
        ].join(' ')}
      />
    );

    const Comp = (
      <IonNav animated="true" ref={nav} mode="ios">
        {isEmpty ? PlaceHolder : children}
      </IonNav>
    );

    return isDev ? <div>{Comp}</div> : Comp;
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
        content: '"Nav"',
      },
    },
  }),
}))();
