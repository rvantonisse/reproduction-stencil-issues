import { Component, Host, Element, Watch, h, forceUpdate } from '@stencil/core';

@Component({
  tag: 'test-watch-only',
  styleUrl: 'test-watch-only.css',
  shadow: true,
})
export class TestWatchOnly {
  @Element() hostElement: HTMLElement;

  private inputElement: HTMLInputElement;

  @Watch('id')
  handleIdWatch(newId: HTMLElement['id'], currentId: HTMLElement['id']) {
    console.log(`TestWatchOnly: ${currentId} ---> ${newId}`);
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
          <legend>Watch only</legend>
          <p>id: {this.hostElement.id}</p>
          <input type="text" id={this.hostElement.id} ref={element => (this.inputElement = element)} />
        </fieldset>
      </Host>
    );
  }
}
