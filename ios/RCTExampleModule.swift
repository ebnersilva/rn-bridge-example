//
//  RCTExampleModule.swift
//  example
//
//  Created by Ebner Silva on 23/09/24.
//

import Foundation
import React

@objc(RCTExampleModule)
class RCTExampleModule: RCTEventEmitter {
  
  @objc
  func printMessage(
    _ title: String,
    _ value: CGFloat
  ) {
    print("Native message with React Native \(title) \(value)")
  }
  
  @objc
  func returnMessage(
      _ title: String,
      resolver resolve: @escaping RCTPromiseResolveBlock,
      rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    resolve("Message processed: \(title)")
  }
  
  @objc
  func eventMessage(_ value: CGFloat) {
    sendEvent(withName: "onMessagePrinted", body: ["value": value])
  }
  
  override func supportedEvents() -> [String]! {
    return ["onMessagePrinted"]
  }
}
