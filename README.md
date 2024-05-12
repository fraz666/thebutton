# thebutton

## Build
Web application:  
`
docker build -t thebutton-web .
`

## Kubernetes
Create a namespace:  
`
kubectl create namespace thebutton
`

and create the resources  
`
kubectl -n thebutton apply -f *.yaml
`