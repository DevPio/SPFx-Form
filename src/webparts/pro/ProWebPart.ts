import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import './components/form/addList';
import * as strings from 'ProWebPartStrings';
import Pro from './components/Pro';
import { IProProps } from './components/IProProps';
import {sp} from '@pnp/sp';

export interface IProWebPartProps {
  description: string;
  
}

export default class ProWebPart extends BaseClientSideWebPart<IProWebPartProps> {

  public onInit(): Promise<void>{
    return super.onInit()
    .then(_ =>{
      sp.setup({
        spfxContext: this.context
      });
    })
  }

  public render(): void {
    const element: React.ReactElement<IProProps> = React.createElement(
      Pro,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
