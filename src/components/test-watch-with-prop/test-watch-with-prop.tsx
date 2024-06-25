import { Component, Host, Element, Watch, h, Prop, forceUpdate } from '@stencil/core';

@Component({
  tag: 'test-watch-with-prop',
  styleUrl: 'test-watch-with-prop.css',
  shadow: true,
})
export class TestWatchWithProp {
  @Element() hostElement: HTMLElement;

  private inputElement: HTMLInputElement;

  // This Prop makes the id watch work.
  @Prop() fakeProp: string;

  @Watch('id')
  handleIdWatch(newId: HTMLElement['id'], currentId: HTMLElement['id']) {
    console.log(`TestWatchWithProp: ${currentId} ---> ${newId}`);
    if (newId !== currentId) {
      // set new input id
      this.inputElement.id = newId;
      forceUpdate(this);
    }
  }

  render() {
    return (
      <Host>
        <fieldset>
          <legend>Watch with Prop</legend>
          <p>id: { this.hostElement.id }</p>
          <input type="text" id={this.hostElement.id} ref={element => (this.inputElement = element)} />
        </fieldset>
      </Host>
    );
  }
}
