def onko_alkuluku(luku):
    luku = int(luku)
    if luku < 2:
        return False

    for jakaja in range(2, int(luku ** 0.5) + 1):
        if luku % jakaja == 0:
            return False

    return True