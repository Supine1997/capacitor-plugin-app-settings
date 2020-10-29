import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AppSettings)
public class AppSettings: CAPPlugin {

    @objc func openAppSettingsOfOS(_ call: CAPPluginCall) {
        if let url = URL(string: UIApplication.openSettingsURLString) {
            if #available(iOS 10.0, *) {
                UIApplication.shared.open(url, options: [:], completionHandler: nil)
            } else {
                UIApplication.shared.openURL(url)
            }
            call.success()
        } else {
            call.error("unknown error")
        }
    }
}
