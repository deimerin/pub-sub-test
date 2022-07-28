package com.example;

public final class App {
    public static void main(String[] args) {
        // New subscriber instance
        MqttSubscriber mqttSubscriber = new MqttSubscriber();
        // Subscribe method
        mqttSubscriber.subscribe();
    }

}
