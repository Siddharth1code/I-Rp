function startClassifiction()
{
    naigatior.meaieDevice.getUserMeadia(audio: true);
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZBFOV-GjF/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}