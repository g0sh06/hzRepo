soma :: Int -> Int -> Int
soma x y = x + y


bmiTell :: (RealFloat a ) => a -> String
bmiTell bmi | bmi <= 18.5 = "U are underweight, please eat some more"
                | bmi <= 25.0 = "U are supposedly normal. Keep that weight"
                | bmi <= 30.0 = "U are overweight. Please hit the gym"
                | otherwise = "You are a complete whale. U should hit the gym and lose some weight"



charName :: Char -> String
charName 'a' = "Adrian"
charName 'b' = "Borislav"
charName 'c' = "Christine"
charName 'd' = "Dorian"
charName 'e' = "Eugene"                