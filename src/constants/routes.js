// src/constants/routes.js

import Argumentos from '../views/ArgumentosView.vue';
import Componentes from '../views/ComponentesView.vue';
import Diretivas from '../views/DiretivasView.vue';
import Emit from '../views/EmitView.vue';
import Eventos from '../views/EventosView.vue';
import HierarquiaComponentes from '../views/HierarquiaComponentesView.vue';
import InputDatabinding from '../views/InputDatabindingView.vue';
import LifecycleHooks from '../views/LifecycleHooksView.vue';
import ListRendering from '../views/ListRenderingView.vue';
import Metodos from '../views/MetodosView.vue';
import MultiplosEventos from '../views/MultiplosEventosView.vue';
import Props from '../views/PropsView.vue';
import ReutilizacaoComponentes from '../views/ReutilizacaoComponentesView.vue';
import ScopedStyles from '../views/ScopedStylesView.vue';

export default [ 
  { path: '/argumentos', component: Argumentos },
  { path: '/componentes', component: Componentes },
  { path: '/diretivas', component: Diretivas },
  { path: '/emit', component: Emit },
  { path: '/eventos', component: Eventos },
  { path: '/hierarquia_componentes', component: HierarquiaComponentes },
  { path: '/input_databinding', component: InputDatabinding },
  { path: '/lifecycle_hooks', component: LifecycleHooks },
  { path: '/list_rendering', component: ListRendering },
  { path: '/metodos', component: Metodos },
  { path: '/multiplos_eventos', component: MultiplosEventos },
  { path: '/props', component: Props },
  { path: '/reutilizacao_componentes', component: ReutilizacaoComponentes },
  { path: '/scoped_styles', component: ScopedStyles },
];
