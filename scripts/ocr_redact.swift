import Foundation
import Vision
import AppKit

// Usage: swift scripts/ocr_redact.swift <image_path>
let args = CommandLine.arguments
guard args.count > 1 else { exit(1) }
let imagePath = args[1]

guard let nsImage = NSImage(contentsOfFile: imagePath),
      let cgImage = nsImage.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    exit(1)
}

let request = VNRecognizeTextRequest()
request.recognitionLevel = .accurate
request.usesLanguageCorrection = false

let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
try? handler.perform([request])

var boxes: [[String: Double]] = []
if let observations = request.results {
    for obs in observations {
        if obs.topCandidates(1).first != nil {
            let bb = obs.boundingBox
            let x = Double(bb.origin.x)
            let y = Double(1.0 - bb.origin.y - bb.size.height)
            let w = Double(bb.size.width)
            let h = Double(bb.size.height)
            boxes.append(["x": x, "y": y, "w": w, "h": h])
        }
    }
}

if let data = try? JSONSerialization.data(withJSONObject: boxes, options: []),
   let str = String(data: data, encoding: .utf8) {
    print(str)
}
