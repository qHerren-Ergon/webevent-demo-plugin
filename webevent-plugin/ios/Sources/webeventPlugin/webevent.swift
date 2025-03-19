import Foundation

@objc public class webevent: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
