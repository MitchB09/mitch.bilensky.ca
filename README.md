# mitch.bilensky.ca

Resume site for Mitch Bilensky.

## Infrascructure

Resources built using AWS Cloudformation. Creates an S3 Bucket to contain the react build output with a CloudFront distribution as both a CDN as well as to configure site with SSL certificate

[CloudFormation Script](template.yaml)

## Site

Slightly tweaked React resume site leveraged from template referenced below. Pulls most displayed data from resumeData.json

[React Project Folder](site/)

## CI/CD

Leverages GitHub Actions to build and deploy site to S3 as well as to create CloudFront invalidations.

[Deploy Script](.github/workflows/main.yml)

## References

- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html
- https://github.com/aws-actions/configure-aws-credentials
- https://github.com/tbakerx/react-resume-template
