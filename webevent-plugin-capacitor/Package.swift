// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "WebeventPlugin",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "WebeventPlugin",
            targets: ["webeventPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "webeventPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/webeventPlugin"),
        .testTarget(
            name: "webeventPluginTests",
            dependencies: ["webeventPlugin"],
            path: "ios/Tests/webeventPluginTests")
    ]
)