// src/constants/routes.js


import Argumentos from '../views/argumentos/ArgumentosView.vue';
import Componentes from '../views/componentes/ComponentesView.vue';
import Diretivas from '../views/diretivas/DiretivasView.vue';
import Emit from '../views/emit/EmitView.vue';
import Eventos from '../views/eventos/EventosView.vue';
import HierarquiaComponentes from '../views/hierarquia_componentes/HierarquiaComponentesView.vue';
import InputDatabinding from '../views/input_databinding/InputDataBindingView.vue';
import LifecycleHooks from '../views/lifecycle_hooks/LifecycleHooksView.vue';
import ListRendering from '../views/list_rendering/ListRenderingView.vue';
import Metodos from '../views/metodos/MetodosView.vue';
import Props from '../views/props/PropsView.vue';
import ReutilizacaoComponentes from '../views/reutilizacao_componentes/ReutilizacaoComponentesView.vue';


const routes = [ 
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
  { path: '/props', component: Props },
  { path: '/reutilizacao_componentes', component: ReutilizacaoComponentes },
];

export default routes
