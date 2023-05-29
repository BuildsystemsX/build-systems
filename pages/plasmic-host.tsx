import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';
import {HelloWorld} from "@/components/HelloWorld";
import '../styles/globals.css';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  },
  importPath: './components/HelloWorld'
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
