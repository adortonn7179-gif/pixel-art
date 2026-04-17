/**
 * Custom blocks for creating pixel art effects
 */
//% color="#4B0082" icon="\uf03e" block="Pixel Art"
namespace pixelArt {

    /**
     * Draws a simple 2x2 pixel stamp at the given coordinates
     * @param x the x-coordinate
     * @param y the y-coordinate
     * @param color the color of the pixel stamp
     */
    //% block="draw pixel stamp at x $x y $y with color $color"
    //% color.shadow="colorindexpicker"
    //% x.defl=80 y.defl=60
    export function drawStamp(x: number, y: number, color: number): void {
        const stamp = image.create(2, 2)
        stamp.fill(color)
        scene.backgroundImage().drawTransparentImage(stamp, x, y)
    }

    /**
     * Creates a custom sprite from a color pattern
     */
    //% block="create sprite with pixel pattern $pattern"
    export function createPatternSprite(pattern: string): Sprite {
        // Example: logic to parse a string into an image
        let img = image.create(8, 8)
        img.fill(1) // Fill with default color
        let s = sprites.create(img, SpriteKind.Player)
        return s
    }
}
