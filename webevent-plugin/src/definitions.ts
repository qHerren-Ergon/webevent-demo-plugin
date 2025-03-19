import {PluginListenerHandle} from "@capacitor/core";

export interface webeventPlugin {
  eventSender(time: string): Promise<void>;

  eventSenderWithTimer(time: string): Promise<void>;

  addListener(
      eventName: 'sendEvent',
      listenerFunc: (value: string, time: string) => void,
  ): Promise<PluginListenerHandle>;

  addListener(
      eventName: 'sendEventWithTimer',
      listenerFunc: (value: string, time: string) => void,
  ): Promise<PluginListenerHandle>;
}
